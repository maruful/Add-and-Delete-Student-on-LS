// send data from LS

let setData = function(key,arr){
    localStorage.setItem( key, JSON.stringify(arr) );
}

// get data from LS

let getData =  function(key){
    return JSON.parse( localStorage.getItem(key) )
}

// delete a student from LS

function deleteData(index){
    let lsData = getData('students');

    let conf = confirm("Are you sure??");

    if(conf){
        lsData.splice(index, 1);

        setData('students', lsData);
    }
    // calling Display data
    displayData()
}

// modal view

const modalView = document.querySelector('.modalView');

function studentView(index){
    let lsData = getData('students');

    modalView.innerHTML = `
    <td>
        ${ lsData[index].name }
    </td>
    <td>
        ${ lsData[index].gender }
    </td>
    `;

}