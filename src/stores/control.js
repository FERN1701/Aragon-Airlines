import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const airlineStore = defineStore('airlineStore', () =>{
    const units = ref([])
    const newUnits = ref({ id:'', image: '', name_unit: '', cost: '', type: '', description: '' })
    const geteditunitID = ref(null)
    const updateUnits = ref({ id:'', image: '', name_unit: '', cost: '', type: '', description: '' })

   
    const stored = localStorage.getItem('myUnits')
    if(stored) units.value = JSON.parse(stored)

    watch(units, (val) =>{
        localStorage.setItem('myUnits', JSON.stringify(val))
    }, { deep: true })

    const getAirline = (id) => units.value.find(u => u.id == id)

    const addUnits = () => {
            if (newUnits.value.name_unit.trim()) {
                units.value.push({ ...newUnits.value })
                console.log('Success')
                newUnits.value = { id:'', image: '', name_unit: '', cost: '', type: '', description: '' }
            }
        }
    
        
    const editUnits = (id) => {
        geteditunitID.value = id
        updateUnits.value = { ...units.value[id]}
    }

    const saveEditUnits = () => {
        if( geteditunitID.value !== null){
            units.value[geteditunitID.value] = {...updateUnits.value}
            geteditunitID.value = null
            updateUnits.value = { id:'', image: '', name_unit: '', cost: '', type: '', description: '' }
            console.log('Updated Successfully')
        }
    }

    const deleteUnits = (id) => {
            units.value.splice(id, 1)
            console.log('Deleted')
    }


    const handleImageUpload = (event) => {
            const file = event.target.files[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = () => {
            newUnits.value.image = reader.result
            }
            reader.readAsDataURL(file)
        }

        const handleEditImageUpload = (event) => {
            const file = event.target.files[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = () => {
            updateUnits.value.image = reader.result
            }
            reader.readAsDataURL(file)
        }

    return { units, newUnits, addUnits, deleteUnits, editUnits, saveEditUnits, updateUnits, geteditunitID, handleImageUpload, handleEditImageUpload, getAirline }
})