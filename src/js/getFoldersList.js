const fs  = require('fs');
const path = require('path');

(async function getFoldersList() {
    const root = path.join(__dirname, '..', '..');
    fs.readdir(root, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
    
        const excludedDirs = ['node_modules', 'src', '.git', 'public']
    
        const folderNames = files.filter((file) => {
            const filePath = path.join(root, file);
            
            if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory() && !excludedDirs.includes(file)) {
                return true;
            }
            return false;
        });
        fs.promises.writeFile('./src/foldersList.json', JSON.stringify(folderNames, null, 2));
        return folderNames;
    });

})();

