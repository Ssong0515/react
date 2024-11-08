import useThemeStore from "../stores/ThemeStore.jsx";
import useMemberStore from "../stores/MemberStore.jsx";

function ProfilePage2(){

    const {theme} = useThemeStore();
    const {member} = useMemberStore();

    return (
        <div className={`p-3 border border-success rounded-2`}>
            <h3>ProfilePage2</h3>
            <h4>zustand를 사용하여 전달 된 데이터1 : {theme}</h4>
            <h4>zustand를 사용하여 전달 된 데이터2 : {member}</h4>
        </div>
    )
}

export default ProfilePage2;