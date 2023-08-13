const utilityArr = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['jpg','png','JPG','PNG']
}

module.exports.utilityfn = function(extension){
    for(const key in utilityArr){
        const arrayValues = utilityArr[key];
        if(arrayValues.includes(extension)){
            return key
        }
    }
};