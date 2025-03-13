// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `
    <footer class="py-5">
        <div class="container text-center">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-12">
                    <img src="../assets/img/profile_icons/crow04.png" id="footer-icon" alt="corvo" style="width: 50px;"
                        class="footer-logo">
                    <hr class="bg-white">
                </div>
                <div class="col-md-12">
                    <a href="https://wa.me/5513981492795" data-aos="fade-down"><img src="../assets/img/icons/wts.png" alt="Whatsapp" title="Whatsapp" id="ico-ftr"></a>
                    <a href="https://www.linkedin.com/in/eduardo-ferreira-1a7b2b1b9/" data-aos="fade-down"><img src="../assets/img/icons/in.png" alt="Linkedin" title="Linkedin" id="ico-ftr"></a>
                    <a href="https://discord.com/users/eduardo_dsf" data-aos="fade-down"><img src="../assets/img/icons/dc.png" alt="Discord" title="Discord" id="ico-ftr"></a>
                    <a href="mailto:eduardosferreira69@gmail.com" data-aos="fade-down"><img src="../assets/img/icons/gmail.png" alt="Gmail" title="Gmail" id="ico-ftr"></a>
                    <a href="https://github.com/EduardoDosSantosFerreira" data-aos="fade-down"><img src="../assets/img/icons/github.png" alt="Github" title="Github" id="ico-ftr"></a>
                </div>
            </div>
            <br>
            <p>&copy; 2025 Eduardo S Ferreira.</p>
        </div>
    </footer>
    `;
    
    document.body.appendChild(div);
}

adicionarLoginAoDOM();