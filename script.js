// CSV 데이터를 직접 JavaScript 변수에 저장합니다.
const csvData = `학과,학년,반,월1,화1,수1,목1,금1,월2,화2,수2,목2,금2,월3,화3,수3,목3,금3,월4,화4,수4,목4,금4,월5,화5,수5,목5,금5,월6,화6,수6,목6,금6,월7,화7,수7,목7,금7
인공지능컴퓨팅과,1,1,미술,수학,영어,영어,국어,체육,창체,국어,응프,미술,소생,소생,사회,│,소실,│,│,체육,│,│,수학,영어,미술,사회,0,사회,국어,수학,과학,0,0,과학,과학,0,0
인공지능컴퓨팅과,1,2,소생,소생,체육,사회,수학,│,│,영어,수학,과학,영어,수학,과학,소실,체육,과학,사회,창체,│,영어,국어,응프,사회,국어,0,미술,│,미술,미술,0,0,│,국어,0,0
전자융합과,1,1,사회,국어,미술,로하,영어,국어,체육,국어,│,사회,미술,미술,소운,창공,과학,영어,과학,│,│,수학,수학,로하,과학,수학,0,체육,창체,창공,영어,0,0,사회,│,0,0
전자융합과,1,2,영어,창체,소운,미술,사회,수학,미술,│,국어,창공,국어,로하,미술,사회,│,체육,│,체육,과학,영어,사회,국어,로하,창공,0,과학,과학,수학,│,0,0,수학,영어,0,0
네트워크통신과,1,1,영어,스콘,과학,소생,국어,수학,│,응화,│,과학,사회,사회,│,미술,영어,미술,체육,│,영어,사회,국어,미술,국어,수학,0,과학,수학,소생,체육,0,0,창체,│,0,0
네트워크통신과,1,2,체육,응화,체육,영어,사회,영어,│,창체,과학,수학,소생,│,사회,소생,국어,│,과학,수학,│,미술,수학,스콘,과학,미술,0,사회,│,영어,국어,0,0,미술,국어,0,0
인공지능전기과,1,1,국어,영어,음악,소생,소생,영어,수학,사회,│,│,사회,음악,과학,과학,체육,수학,국어,소방,영어,사회,과학,소방,국어,소방,0,음악,│,수학,체육,0,0,│,창체,0,0
인공지능전기과,1,2,체육,소생,소방,소생,과학,음악,│,│,│,영어,소방,과학,│,수학,음악,소방,수학,수학,사회,국어,영어,사회,사회,창체,0,국어,체육,과학,음악,0,0,국어,영어,0,0
인공지능소프트웨어과,1,1,음악,창체,과학,사회,소생,수학,국어,응화,영어,│,응화,사회,│,국어,국어,│,음악,│,과학,과학,영어,소생,영어,음악,0,체육,│,체육,수학,0,0,수학,사회,0,0
인공지능소프트웨어과,1,2,과학,체육,국어,국어,응화,국어,응화,음악,사회,│,영어,│,소생,수학,사회,사회,│,│,체육,음악,음악,과학,영어,소생,0,수학,창체,과학,│,0,0,영어,수학,0,0
인공지능컴퓨팅과,2,1,독서,창체,수학,독서,모델,체육,물리,영어,한사,│,수학,응화,컴시,수학,독서,물리,│,│,영어,한사,한사,선2 ,선1 ,전자,0,영어,│,│,디논,0,0,│,│,0,0
인공지능컴퓨팅과,2,2,수학,응화,컴시,수학,독서,물리,│,│,물리,수학,모델,영어,한사,영어,영어,│,독서,독서,디논,전자,창체,선2 ,선1 ,체육,0,한사,│,│,한사,0,0,│,│,0,0
전자융합과,2,1,로소,한사,체육,물리,시소,│,영어,창체,한사,│,영어,로소,디논,독서,│,한사,│,│,영어,수학,독서,선2 ,물리,3D  ,0,수학,│,독서,│,0,0,│,수학,0,0
전자융합과,2,2,영어,로소,수학,3D  ,한사,독서,│,영어,│,물리,수학,물리,창체,디논,영어,체육,한사,한사,│,독서,로소,선2 ,시소,수학,0,│,│,│,독서,0,0,│,│,0,0
네트워크통신과,2,1,한사,독서,독서,정하,수학,물리,물리,창체,│,한사,수학,한사,응프,│,정하,영어,영어,│,독서,│,유선,선2 ,영어,유선,0,│,│,체육,│,0,0,│,수학,0,0
인공지능전기과,2,1,한사,물리,수학,선1 ,체육,물리,독서,독서,│,수학,기기,한사,창체,│,영어,│,수학,영어,│,한사,영어,선2 ,사무,│,0,독서,│,│,│,0,0,│,│,0,0
인공지능전기과,2,2,수학,영어,영어,영어,승강,영어,내선,영어,체육,영어,창체,│,수학,내선,한사,안전,│,수학,사무,수학,승강,창체,체육,수학,0,한사,수학,한사,한사,0,0,한사,한사,0,0
인공지능소프트웨어과,2,1,수학,선1 ,한사,데베,영어,한사,│,수학,│,수학,물리,독서,응프,한사,체육,창체,영어,│,독서,독서,데베,선2 ,응프,물리,0,│,│,│,영어,0,0,│,│,0,0
인공지능소프트웨어과,2,2,체육,응프,공업,선1 ,한사,한사,│,창체,│,영어,빅데,빅데,데베,응프,데베,│,│,│,│,│,공업,한사,한사,한사,0,영어,영어,한사,영어,0,0,영어,영어,0,0
인공지능컴퓨팅과,3,1,선1 ,성직,사물,디디,수학,│,성직,│,│,선2 ,│,창체,사물,수학,│,│,수학,│,공업,│,│,공업,디디,인설,0,│,체육,│,│,0,0,0,│,0,0
인공지능컴퓨팅과,3,2,선1 ,창체,디디,수학,공업,│,수학,│,체육,선2 ,│,사물,│,디디,│,│,│,공업,│,│,│,사물,성직,인설,0,│,│,성직,│,0,0,0,수학,0,0
전자융합과,3,1,선1 ,가하,성직,드론,성직,│,│,수학,│,선2 ,│,토익,가하,공업,│,│,체육,│,공업,│,│,수학,3D  ,토익,0,│,창체,│,수학,0,0,0,│,0,0
전자융합과,3,2,선1 ,수학,가하,수학,수학,│,체육,│,토익,선2 ,│,가하,공업,드론,│,│,│,공업,│,│,│,성직,3D  ,창체,0,│,토익,│,성직,0,0,0,│,0,0
네트워크통신과,3,1,장비,시프,유선,수학,공업,│,│,│,창체,선2 ,│,수학,│,성직,│,성직,공업,수학,체육,│,지휘,장비,지휘,군리,0,│,│,│,│,0,0,0,│,0,0
네트워크통신과,3,2,장비,유선,시프,체육,성직,│,│,│,수학,선2 ,│,│,공업,창체,│,수학,수학,성직,공업,│,지휘,장비,지휘,군리,0,│,│,│,│,0,0,0,│,0,0
인공지능전기과,3,1,제어,설계,수학,성직,체육,│,│,선1 ,성직,선2 ,│,│,│,공업,│,기계,토익,│,공업,│,│,창체,│,수학,0,│,수학,│,토익,0,0,0,│,0,0
인공지능전기과,3,2,내선,내선,창체,체육,안전,│,│,체육,체육,│,│,│,기계,성직,기계,│,│,│,성직,창체,│,│,승강,안전,0,│,│,│,창체,0,0,0,│,0,0
인공지능소프트웨어과,3,1,수학,수학,공업,응화,토익,데베,모델,수학,│,선2 ,│,│,체육,선1 ,│,│,│,창체,│,│,응화,성직,빅데,공업,0,│,성직,│,토익,0,0,0,│,0,0
인공지능소프트웨어과,3,2,응화,모델,성직,성직,성직,│,│,창체,데프,창체,│,성직,응화,│,정소,창체,체육,│,│,│,모델,데프,정소,선1 ,0,│,│,│,│,0,0,0,│,0,0`;

// --- 코드 시작 --- //
document.addEventListener('DOMContentLoaded', () => {
    // CSV 데이터를 파싱하여 객체 배열로 변환
    Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
            const parsedData = results.data;
            populateDropdowns(parsedData);
            
            // 드롭다운 메뉴 변경 감지
            document.getElementById('department').addEventListener('change', () => filterAndDisplay(parsedData));
            document.getElementById('grade').addEventListener('change', () => filterAndDisplay(parsedData));
            document.getElementById('class').addEventListener('change', () => filterAndDisplay(parsedData));
        }
    });
});

function populateDropdowns(data) {
    const departments = [...new Set(data.map(item => item.학과))];
    const grades = [...new Set(data.map(item => item.학년))];
    const classes = [...new Set(data.map(item => item.반))];

    // 드롭다운 메뉴 채우기
    populateSelect('department', departments);
    populateSelect('grade', grades);
    populateSelect('class', classes);
}

function populateSelect(selectId, options) {
    const selectElement = document.getElementById(selectId);
    selectElement.innerHTML = `<option value="">선택</option>`; // 기본 '선택' 옵션 추가
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        selectElement.appendChild(opt);
    });
}

function filterAndDisplay(data) {
    const selectedDept = document.getElementById('department').value;
    const selectedGrade = document.getElementById('grade').value;
    const selectedClass = document.getElementById('class').value;

    const filteredData = data.filter(item => 
        (selectedDept === "" || item.학과 === selectedDept) &&
        (selectedGrade === "" || item.학년 === selectedGrade) &&
        (selectedClass === "" || item.반 === selectedClass)
    );
    
    // 조건이 모두 선택되었을 때만 시간표 표시
    if (selectedDept && selectedGrade && selectedClass) {
        displayTimetable(filteredData);
    } else {
        document.getElementById('timetable-container').innerHTML = '<p>학과, 학년, 반을 모두 선택해주세요.</p>';
    }
}

function displayTimetable(data) {
    const container = document.getElementById('timetable-container');
    container.innerHTML = ''; // 기존 시간표 지우기

    if (data.length === 0) {
        container.innerHTML = '<p>해당하는 시간표가 없습니다.</p>';
        return;
    }

    const timetableData = data[0]; // 필터링 결과는 한 줄만 있을 것

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // 헤더 (교시) 생성
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `<th></th>
                           <th>1교시</th><th>2교시</th><th>3교시</th><th>4교시</th><th>5교시</th><th>6교시</th><th>7교시</th>`;
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // 데이터 (요일별 과목) 생성
    const days = ['월', '화', '수', '목', '금'];
    days.forEach(day => {
        const row = document.createElement('tr');
        const dayHeader = document.createElement('th');
        dayHeader.textContent = day;
        row.appendChild(dayHeader);

        for (let i = 1; i <= 7; i++) {
            const cell = document.createElement('td');
            const subject = timetableData[`${day}${i}`] || '';
            cell.textContent = subject;
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    container.appendChild(table);

}

