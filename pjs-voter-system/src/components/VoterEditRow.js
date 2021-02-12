import { useForm } from '../hooks/useForm.js';


export const VoterEditRow = ({
    voter, 
    onSaveVoter: saveVoter , 
    onCancelEditVoter: cancelEditVoter}) => {

    const getIntialVoterFormData = () => ( {...voter})
    const [ voterForm, change ] = useForm(getIntialVoterFormData())
    
    return (
        <tr>
            <td>{voter.id}</td>
            <td><input type="text" id="firstName-input" name="firstName"
                value={voterForm.firstName} onChange={change}/></td>
            <td><input type="text" id="lastName-input" name="lastName"
                value={voterForm.lastName} onChange={change}/></td>
            <td><input type="text" id="address-input" name="address"
                value={voterForm.address} onChange={change}/></td>
            <td><input type="text" id="city-input" name="city"
                value={voterForm.city} onChange={change}/></td>
            <td><input type="text" id="zipcode-input" name="zipcode"
                value={voterForm.zipcode} onChange={change}/></td>
            <td><input type="text" id="birthdate-input" name="birthdate"
                value={voterForm.birthdate} onChange={change}/></td>
            <td><input type="text" id="email-input" name="email"
                value={voterForm.email} onChange={change}/></td>
            <td><input type="text" id="phone-input" name="phone"
                value={voterForm.phone} onChange={change}/></td>

            <td>
                <button type="button" onClick={() => {
                    saveVoter(voterForm);
                }}>Save</button>
            </td>
            <td>
                <button type="button" onClick={() => {
                    cancelEditVoter(voterForm);
                }}>Cancel</button>
            </td>            
        </tr>
    );
};


VoterEditRow.defaultProps = {
    voter: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipcode: '',
        birthdate: '',
        email: '',
        phone: '',
    },
}