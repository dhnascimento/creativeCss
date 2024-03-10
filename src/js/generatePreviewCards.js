
(async function generatePreviewCards() {
    try {
        const pagesListJSON = await fetch('/src/foldersList.json');
        console.log(pagesListJSON);
        let pagesList = await pagesListJSON.json();
        pagesListString =  pagesList.map(item => {
            // Convert snake case to title case and replace underscores with spaces
            const title = item
                .replace(/_/g, ' ')
                .split(" ")
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(" ");
            // Construct the HTML for each card
            return `
                <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm m-4">
                    <a href="/${item}" class="block relative h-48">
                        <img alt="${title}"
                         class="object-cover w-full h-full"
                         src="string/preview.png" 
                         onerror="this.onerror=null; this.src='/public/fallback.png'"
                         >
                    </a>
                    <div class="p-4">
                        <h2 class="text-xl font-bold text-center">${title}</h2>
                    </div>
                </div>
            `;
        }).join('');

        document.querySelector('#preview-cards').innerHTML = pagesListString;
    } catch (error) {
        console.error(error);
        document.querySelector('#preview-cards').innerHTML = `
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">Something went wrong while rendering the preview cards :(</span>
      </div>`;
    }
})();
