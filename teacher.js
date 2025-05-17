
async function renderTable() {
    try {
        const response = await fetch('teacher.json');
        if (!response.ok) {
        throw new Error(`Ошибка загрузки файла: ${response.statusText}`);
        }
        const data = await response.json();

        const container = document.createElement('div');
        container.style.display = 'grid';
        container.style.border = '0.5px solid #985ACE';
        container.style.width = '80%';
        container.style.margin ='0 auto';

        const headers = Object.keys(data[0]);

        container.style.gridTemplateColumns = `repeat(${headers.length}, auto)`;

        headers.forEach(header => {
        const headerDiv = document.createElement('div');
        headerDiv.innerText = header;
        headerDiv.style.fontWeight = 'bold';
        headerDiv.style.border = '0.5px solid #985ACE';
        headerDiv.style.padding = '4px';
        headerDiv.style.backgroundColor = '#985ACE';
        headerDiv.style.color = 'white'
        container.appendChild(headerDiv);
        });

        data.forEach(item => {
            headers.forEach(header => {
                const cellDiv = document.createElement('div');
                cellDiv.innerText = item[header];
                cellDiv.style.border = '0.5px solid #985ACE';
                cellDiv.style.padding = '4px';
                container.appendChild(cellDiv);
            });
        });

        const targetContainer = document.querySelector('.container');
        if (targetContainer) {
            targetContainer.innerHTML = ''; 
            targetContainer.appendChild(container);
        } else {
            console.log(new XMLSerializer().serializeToString(container));
            }
        } catch (error) {
        console.error('Ошибка при загрузке или отображении данных:', error);
    }
}

renderTable()