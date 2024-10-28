let data_users_tag = document.getElementById("data");
fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(datas => {
        datas.data.slice(0, 6).forEach(users => {
                data_users_tag.innerHTML += `
                 <tr>
                 
                        <td class="border border-green-600">${users.id}</td>
                        <td class="border border-green-600"><img src="${users.avatar}" class="w-40" /></td>
                        <td class="border border-green-600">${users.email}</td>
                        <td class="border border-green-600">${users.first_name} ${users.last_name}</td>
                        
                    </tr>
                `;
                
            
        });
    })
    .catch(error => {
        console.error(`Error fetching data: ${error}`);
        data_users_tag.innerHTML = `<tr><td colspan="6" class="border border-red-600 text-red-600">Failed to load data. Please try again later.</td></tr>`;
});

   