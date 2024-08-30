// import React from 'react';
// import '../CSS/SearchForm.css';
// import $ from 'jquery';

// function SearchForm() {

//   function searchIdol() {
//     $("#idol-list-holder").html(`<img class="search-loading" src="/img/loading.gif">`);

//     // ประกาศตัวแปร tag
//     const tag = $(`input[name="tag[]"]`).serialize();
//     console.log(tag);

//     $.ajax({
//       method: "GET",
//       url: "/searchidol",
//       data: "keyword=" + $("#keyword").val() + "&gender=" + $("#gender").val() + "&" + tag
//     })
//       .done(function (data) {
//         $("#idol-list-holder").html(data);
//       })
//       .fail(function (data) {
//         console.log(data);
//       });
//   }
//   return (
//     <div className="container">
//       <div className="search-form-holder">
//         <h2 className="home-search-header">ค้นหาแม่สื่อที่ถูกใจ</h2>
//         <form className="row search-form">
//           <div className="mb-3 col-sm-6 col-lg-3 input-box">
//             <label htmlFor="keyword" className="form-label">ชื่อเล่น / พื้นที่ / จังหวัด / อื่น ๆ</label>
//             <input className="form-control" type="text" id="keyword" placeholder="ชื่อเล่น / พื้นที่ / จังหวัด / อื่น ๆ" />
//           </div>

//           <div className="mb-3 col-sm-6 col-lg-3 input-box">
//             <label htmlFor="gender" className="form-label">เลือกเพศ</label>
//             <select className="form-select me-2 full-round" id="gender" aria-label="Default select example">
//               <option value="all">ทั้งหมด</option>
//               <option value="female">หญิง</option>
//               <option value="male">ชาย</option>
//               <option value="ladyboy">สาวประเภทสอง</option>
//               <option value="gay">เกย์</option>
//               <option value="tom">ทอม</option>
//             </select>
//           </div>
//           <div className="mb-3 col-sm-6 col-lg-3 input-box">
//             <button
//               className="btn btn-idol-third"
//               type="button"
//               onClick={searchIdol}
//             >
//               ค้นหาแม่สื่อ
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default SearchForm;

import React, { useEffect, useState } from 'react';
import '../CSS/SearchForm.css';
import IdolCard from './IdolCard';
import IdolData from './IdolData';

function SearchForm() {
  const [filteredIdols, setFilteredIdols] = useState([]);
  

  useEffect(() => {
    setFilteredIdols(IdolData);
  }, []);

  const searchIdol = () => {
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const gender = document.getElementById("gender").value;

 

    const results = IdolData.filter(idol => {
      const nickname = idol.name ? idol.name.toLowerCase() : '';
      const age = idol.age ? (Array.isArray(idol.age) ? idol.age.join(' ') : idol.age).toLowerCase() : '';
      const idolGender = idol.gender ? idol.gender.toLowerCase() : '';
      const location = idol.location ? idol.location.toLowerCase() : '';
      const details = Array.isArray(idol.details) ? idol.details.join(' ').toLowerCase() : (idol.details || '').toLowerCase();
      const description = idol.description ? idol.description.toLowerCase() : '';

      const matchesKeyword =
        nickname.includes(keyword) ||
        age.includes(keyword) ||
        idolGender.includes(keyword) ||
        location.includes(keyword) ||
        details.includes(keyword) ||
        description.includes(keyword);

      const matchesGender = gender === 'all' || idolGender === gender.toLowerCase();

      return matchesKeyword && matchesGender;
    });

    setFilteredIdols(results);
  };

  // Helper function to chunk the array into rows of 4
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  return (
    <div className="container">
      <div className="search-form-holder">
        <h2 className="home-search-header">ค้นหาแม่สื่อที่ถูกใจ</h2>
        <form className="row search-form" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3 col-sm-6 col-lg-3 input-box">
            <label htmlFor="keyword" className="form-label">ชื่อเล่น / พื้นที่ / จังหวัด / อื่น ๆ</label>
            <input className="form-control" type="text" id="keyword" placeholder="ชื่อเล่น / พื้นที่ / จังหวัด / อื่น ๆ" />
          </div>

          <div className="mb-3 col-sm-6 col-lg-3 input-box">
            <label htmlFor="gender" className="form-label">เลือกเพศ</label>
            <select className="form-select me-2 full-round" id="gender" aria-label="Default select example">
              <option value="all">ทั้งหมด</option>
              <option value="หญิง">หญิง</option>
              <option value="ชาย">ชาย</option>
              <option value="สาวประเภทสอง">สาวประเภทสอง</option>
              <option value="เกย์">เกย์</option>
              <option value="ทอม">ทอม</option>
            </select>
          </div>
          <div className="mb-3 col-sm-6 col-lg-3 input-box">
            <button
              className="btn btn-idol-third"
              type="button"
              onClick={searchIdol}
            >
              ค้นหาแม่สื่อ
            </button>
          </div>
        </form>
      </div>

      <div id="idol-list-holder" className="idol-list-holder">
        {filteredIdols.length > 0 ? (
          chunkArray(filteredIdols, 4).map((row, rowIndex) => (
            <div key={rowIndex} className="row mb-4">
              {row.map((idol) => (
                <IdolCard
                  key={idol.id}
                  id={idol.id}
                  name={idol.name}
                  age={idol.age}
                  gender={idol.gender}
                  location={idol.location}
                  description={idol.description}
                  imgSrc={idol.imgSrc}
                  details={idol.details}
                />
              ))}
            </div>
          ))
        ) : (
          <h1>ไม่พบผลลัพธ์ที่ตรงกับการค้นหา</h1>
        )}
      </div>
    </div>
  );
}

export default SearchForm;


