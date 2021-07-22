const doc = document

const leftArrow = doc.getElementById('left-arrow')
const rightArrow = doc.getElementById('right-arrow')

const sell = doc.getElementById('data-sell')
const photo = doc.getElementById('data-photo')
const spawn = doc.getElementById('data-spawn')
const impound = doc.getElementById('data-impound')

// Changing slides
leftArrow.addEventListener('click', () => {

})

rightArrow.addEventListener('click', () => {
    
})

// Btns data
// You could prob add a click listener for every element/vehicle added. This is just a test.
sell.addEventListener('click', () => {

    fetchNUI('sellVehicle', tostring(thisVehiclePrice));
})

photo.addEventListener('click', () => {
    let inpVal = input.value;
    // this.image.src = inpVal
    fetchNUI('updateImage', tostring(inpVal));
})

spawn.addEventListener('click', () => {
    let thisImageVehName = something;
    fetchNUI('spawnVehicle', tostring(thisImageVehName));
})

impound.addEventListener('click', () => {
    impound.style.display = 'none'
})

// Post Requests (Taso)
const fetchNUI = async (cbname, data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    };
    const resp = await fetch(`https://new-garage-who-dis/${cbname}`, options);
    return await resp.json();
}