import {useState} from "react";

const selectList = ['apple', 'banana', 'peach', 'grape', 'watermelon'];

function FruitSelect(){
    const [value, setValue] = useState('apple');
    const [value2, setValue2] = useState([]);

    const handleChange = e => setValue(e.target.value);

    const handleChangeMultiple = e => {
        const options = [...e.target.selectedOptions];
        const values = options.map(item => item.value);
        setValue2(values);
    }

    const handleSubmit = e => {
        alert(`선택한 과일 : ${value}`);
        alert(`선택한 과일들 : ${value2}`)
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className={`mt-3`}>
                    <label htmlFor="`fruitSelect" className={`form-label`}> 좋아하는 과일 선택:
                    <select id="`fruitSelect" className={`form-control mt-1`} value={value} onChange={handleChange}>
                        <option value="apple">사과</option>
                        <option value="banana">바나나</option>
                        <option value="peach">복숭아</option>
                        <option value="grape">포도</option>
                        <option value="watermelon">수박</option>
                    </select>
                    </label>
                </div>

                <div className={`mt-3`}>
                    <label htmlFor="`fruitSelectMultiple" className={`form-label`}>
                        좋아하는 과일 선택(여러개):
                        <select id="`fruitSelectMultiple" className={`form-control mt-1`} value={value2} onChange={handleChangeMultiple} multiple={true}>
                            {
                                selectList.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })
                            }
                        </select>
                    </label>
                </div>

                <div className={`mt-1`}>
                    <button type={`submit`} className={`btn btn-primary`}>확인</button>
                </div>
            </form>
        </div>
    )
}

export default FruitSelect;