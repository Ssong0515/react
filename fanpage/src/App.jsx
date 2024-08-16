import CharacterCard from "./components/CharacterCard.jsx";

function App() {

    const character = (id, name, img) => {
        return {id, name, img};
    }

    const data = [
        character(1, "박보영", "/park.jpg"),
        character(2, "장원영", "/jang.jpg"),
        character(3, "카리나", "/ka.jpg"),
        character(4, "백지현", "/baek.jpg")
    ]


    return (
        <div className={'container'}>
            <div className={'row'}>
                {data.map(item => {
                    if (item.id === 1 || item.id === 2) {
                        return (
                            <div className={'col-6'}>
                                <CharacterCard data={item}/>
                            </div>
                        )
                    }
                })}
            </div>
            <div className={'row'}>
                {data.map(item => {
                    if (item.id === 3 || item.id === 4) {
                        return (
                            <div className={'col-6'}>
                                <CharacterCard data={item}/>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default App
