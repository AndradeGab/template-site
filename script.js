// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ==============================
// FECHAR MENU AO CLICAR
// ==============================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ==============================
// SCROLL SUAVE
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ==============================
// ANO AUTOMÁTICO
// ==============================

const ano = document.querySelector("#ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}
const nomeEmpresa = document.querySelector("#empresa-nome");

if (nomeEmpresa) {
    nomeEmpresa.textContent = empresa.nome;
    nomeEmpresa.style.setProperty("--cor-destaque", empresa.corDestaque);
}

document.documentElement.style.setProperty(
    "--primary",
    tema.corPrincipal
);

const sloganEmpresa = document.querySelector("#empresa-slogan");

if (sloganEmpresa) {
    sloganEmpresa.textContent = empresa.slogan;
}

const whatsappCta = document.querySelector("#whatsapp-cta");
const whatsappFooter = document.querySelector("#whatsapp-footer");

const linkWhatsapp = `https://wa.me/${empresa.whatsapp}`;

if (whatsappCta) {
    whatsappCta.href = linkWhatsapp;
}

if (whatsappFooter) {
    whatsappFooter.href = linkWhatsapp;
}

const whatsappFloat = document.querySelector("#whatsapp-float");

if (whatsappFloat) {
    whatsappFloat.href = linkWhatsapp;
}

const instagramFooter = document.querySelector("#instagram-footer");

if (instagramFooter) {
    instagramFooter.href = `https://instagram.com/${empresa.instagram.replace("@", "")}`;
}

const enderecoEmpresa = document.querySelector("#empresa-endereco");

if (enderecoEmpresa) {
    enderecoEmpresa.textContent = empresa.endereco;
}   