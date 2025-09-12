<template>
    <div class="mx-8">
        <footer class="relative flex flex-row justify-around items-center flex-wrap gap-x-8 gap-y-4 w-fit mx-auto mb-8 px-8 py-4 rounded
            before:rounded-md
        ">
            <FooterLink href="https://github.com/linvisn">
                <Icon name="cib:github" /> GitHub
            </FooterLink>
            <FooterText>
                <Icon name="mdi:email" /> linvisn@proton.me
            </FooterText>
        </footer>
    </div>
</template>

<style scoped>
footer {
    background-color: rgba(126, 18, 175, .75);
}

footer::before {
    content: '';
    box-sizing: content-box;

    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    
    height: 100%;
    width: 100%;
    padding: .25rem;

    background: conic-gradient(from var(--angle), transparent, rgb(111, 6, 182), rgb(170, 10, 58), transparent);

    animation: 5s spin ease-in-out infinite;
    transition: inherit;
    z-index: -1;
}
</style>