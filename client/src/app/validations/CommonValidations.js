export function isDate(txtDate) {
    let currVal = txtDate;
    if (currVal == '')
        return false;
    
    //Declare Regex
    let rxDatePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
    
    // is format OK?
    let dtArray = currVal.match(rxDatePattern);

    if (dtArray == null)
        return false;

    //Checks for yyyy/mm/dd format.
    let dtYear = dtArray[1] ? dtArray[1] : null;
    let dtMonth = dtArray[3] ? dtArray[3] : null;
    let dtDay = dtArray[5] ? dtArray[5] : null; 

    if(dtYear && dtMonth && dtDay) {
        if (dtMonth < 1 || dtMonth > 12)
            return false;
        else if (dtDay < 1 || dtDay > 31)
            return false;
        else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
            return false;
        else if (dtMonth == 2) {
            let isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay > 29 || (dtDay == 29 && !isleap))
                return false;
        }
    }
    
    return true;
}

export function isImage(file) {
    if(file.type) {
        let types = ["image/jpeg", "image/pjpeg", "image/png", "image/gif"];
        let type = file.type;
        //Not IE
        if(types.indexOf(type) == -1) {
            return false;   
        } 
    } else {
        let mime_types = ["jpge", "pjpeg", "png", "gif"];
        let fname = file.name;
        let mime_type = fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2);
        //check IE
        if(mime_types.indexOf(mime_type) == -1) {
            return false;
        } 
    }

    return true;
}