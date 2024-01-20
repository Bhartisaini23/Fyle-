document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll('.hero');
    const totalPages = pages.length;
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });
    }

    showPage(currentPage);

    document.getElementById("prev-page").addEventListener("click", function () {
        currentPage = (currentPage - 1 + totalPages) % totalPages;
        showPage(currentPage);
    });

    document.getElementById("next-page").addEventListener("click", function () {
        currentPage = (currentPage + 1) % totalPages;
        showPage(currentPage);
    });

    const paginationList = document.querySelector('.pagination ul');
    paginationList.innerHTML = ''; // Clear existing list items

    for (let i = 0; i < totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#";
        a.innerText = i + 1;
        li.appendChild(a);
        paginationList.appendChild(li);

        a.addEventListener('click', function () {
            currentPage = i;
            showPage(currentPage);
        });
    }
});
