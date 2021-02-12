export const toString = (value) => {
    return isNaN(value) ? '' : String(value)
}


export const checkValidEmail = function(val) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)) {    
    return (true)
  }
  return (false)
}

export const checkValidPhone = function(val) {
  if (/^\d{10}$/.test(val)) {    
    return (true)
  } else if (/^\d{3}-\d{3}-\d{4}$/.test(val)) {
    return (true)
  }
  return (false)
}

export const checkValidZip = function(val) {
  if (/^(\d{5})(-\d{4})?$/.test(val)){    
    return (true)
  }
  return (false)
}

export const checkRequiredText = (val) => { 
  if (val.length > 0)
    return true 
  return false
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
