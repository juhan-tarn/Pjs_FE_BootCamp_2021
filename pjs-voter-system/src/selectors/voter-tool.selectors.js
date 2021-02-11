export const sortVotersSelector = ({ voters, sortField }) => {
    return [...voters].sort((a, b) => {
        const aValue = String(a[sortField]).toUpperCase();
        const bValue = String(b[sortField]).toUpperCase();

        if (aValue < bValue) return -1;
        else if (aValue > bValue) return 1;
        else return 0;
    });
};