import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faPen} from '@fortawesome/free-solid-svg-icons';
function XodimItems ({item, delUser, EditModal, index}) {
    return (
            <tr >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.telefon}</td>
                <td>{item.lavozim}</td>
                <td>{item.daraja}</td>
                <td>
                    <FontAwesomeIcon onClick={()=>EditModal(item.id)} style={{marginRight: '14px', cursor: 'pointer'}} icon={faPen} />
                    <FontAwesomeIcon onClick={()=>delUser(index)} style={{cursor: 'pointer'}} icon={faTimes} />
                </td>
            </tr>
    );
}

export default XodimItems;