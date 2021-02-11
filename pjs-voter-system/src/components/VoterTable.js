export const VoterTable = ({voters}) => {


    const voterTableItems = voters.map(
        voter => {
            (voter.isEdit ? <VoterViewRow voter={voter} /> : <VoterViewRow voter={voter}/>);
        }
    );

    return (
        <>
            <table>
                <thead>
                    <tr onClick={() => console.log('sort')}>Voter ID</tr>
                    <tr onClick={() => console.log('sort')}>First Name</tr>
                    <tr onClick={() => console.log('sort')}>Last Name</tr>
                    <tr onClick={() => console.log('sort')}>Address</tr>
                    <tr onClick={() => console.log('sort')}>City</tr>
                    <tr onClick={() => console.log('sort')}>Zipcode</tr>
                    <tr onClick={() => console.log('sort')}>Birth Date</tr>
                    <tr onClick={() => console.log('sort')}>Email</tr>
                    <tr onClick={() => console.log('sort')}>Phone</tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </>
    );
};