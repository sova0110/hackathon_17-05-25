
async function renserTable() {
    try {
        const response = await fetch('teacher.json');
        if (!response.ok) {
        throw new Error(`Ошибка загрузки файла: ${response.statusText}`);
        }
        const data = await response.json();

        const container = document.createElement('div');
        container.style.display = 'grid';
        container.style.border = '1px solid #000';

        const headers = Object.keys(data[0]);

        container.style.gridTemplateColumns = `repeat(${headers.length}, auto)`;

        headers.forEach(header => {
        const headerDiv = document.createElement('div');
        headerDiv.innerText = header;
        headerDiv.style.fontWeight = 'bold';
        headerDiv.style.border = '1px solid #000';
        headerDiv.style.padding = '4px';
        container.appendChild(headerDiv);
        });

        data.forEach(item => {
            headers.forEach(header => {
                const cellDiv = document.createElement('div');
                cellDiv.innerText = item[header];
                cellDiv.style.border = '1px solid #000';
                cellDiv.style.padding = '4px';
                container.appendChild(cellDiv);
            });
        });

        const targetContainer = document.querySelector('.gridContainer');
        if (targetContainer) {
            targetContainer.innerHTML = ''; // очищаем предыдущий контент
            targetContainer.appendChild(container);
        } else {
            console.log(new XMLSerializer().serializeToString(container));
            }
        } catch (error) {
        console.error('Ошибка при загрузке или отображении данных:', error);
    }
}
