document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelectorAll('.btn');
    btn.forEach(elem => {
        elem.addEventListener('click', function(){
            btn.forEach(i => i.classList.remove('active'));
            elem.classList.add('active');
            const elems = `content-${elem.id.split('-')[1]}`;
            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('active');
                if (content.id === elems) {
                content.classList.add('active');
                }
            });
        });
    });
});