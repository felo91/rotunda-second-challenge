import { useFetch } from '../hooks/useFetch';

export default function SelectMembers({setMemberSelected}) {

    console.log({setMemberSelected});

    const { response } = useFetch({
        url: '/members',
        method: 'get'
    });

    const hadleSelectChange = (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const selectedMemberId =  el.getAttribute('id');  
        console.log({selectedMemberId})
        const selectedMemberName = e.target.value;
        console.log({selectedMember: {selectedMemberId, selectedMemberName}});
        setMemberSelected({id:selectedMemberId, username:selectedMemberName});
    }
    
    return (
        <>
            <select onChange={hadleSelectChange} className="appearance-none h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option key='0'>Anyone</option>
                {
                    
                    response && response.members && response.members.map((member) => {
                        return <option id={member.id} key={member.id}>{member.username}</option>
                    })
                }
            </select>
            <div
                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </>
    );
}