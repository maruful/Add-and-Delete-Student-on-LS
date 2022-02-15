// fetching elements
const sForm = document.getElementById('sForm');
const dataDisplay = document.querySelector('.displayData');



// calling Display data
displayData()

sForm.addEventListener('submit', (f)=> {
    f.preventDefault();

    const name = document.querySelector("input[placeholder='Name']");
    const gender = document.querySelector("input[name='gender']:checked");
    const lvl = document.querySelector('select');
    const skills = document.querySelectorAll('input[name=skills]:checked');

    let all_skills = [];

    skills.forEach(skill => {
        all_skills.push(skill.value);
    })

    let lsData;

    if( getData('students') ){
        lsData = getData('students');
    }else{
        lsData = [];
    }

    lsData.push({
        name : name.value,
        gender : gender.value,
        skills : all_skills,
        level : lvl.value
    })

    setData('students', lsData);

// calling Display data
    displayData()

    
})

function displayData(){
    let lsData = getData('students');

    let all_data = '';
    
    lsData.map( (data, i) => {

        let skills = '';

        data.skills.map(data => {
            skills += `
                <button>${ data }</button>
            `;
        })

       all_data +=`
       <tr>
            <td>${ i }</td>
            <td>${ data.name }</td>
            <td>${ data.gender }</td>
            <td>${ skills }</td>
            <td>${ data.level }</td>
            <td>
                <button class="btn btn-info btn-sm" onClick="studentView(${ i })" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                <button class="btn btn-danger btn-sm" onClick="deleteData(${ i })">Delete</button>
            </td>
        </tr>
       `;
    })

    dataDisplay.innerHTML = all_data;
}

