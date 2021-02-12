

export const toString = (value) => {
    return isNaN(value) ? '' : String(value)
}


export const sortList = (list, sortField) => {
    console.log(sortField, list);
  
    return [...list].sort((a, b) => {
      const aValue = String(a[sortField]).toUpperCase();
      const bValue = String(b[sortField]).toUpperCase();
  
      if (aValue < bValue) return -1;
      else if (aValue > bValue) return 1;
      else return 0;
    });
  };
