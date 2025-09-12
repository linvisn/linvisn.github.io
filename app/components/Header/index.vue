<template>
    <header class="flex justify-between items-center flex-wrap sticky top-0 px-5 lg:px-12 py-2 border-b-2 z-50">
        <div class="flex justify-between w-screen lg:w-auto">
            <HeaderTitle>
                linvisn
            </HeaderTitle>
            
            <HeaderDropdown class="inline lg:hidden" :icon="'mdi:menu'" :isMenu="true">
                <HeaderDropdownItem class="border-b" to="/">
                    <Icon name="mdi:home-variant" /> Home
                </HeaderDropdownItem>

                <HeaderDropdownLabel>
                    <Icon name="mdi:bookmark-multiple" /> Projects
                </HeaderDropdownLabel>
                <div class="flex flex-col justify-start mx-4 mb-1 pl-2 py-1 border-l border-white/25">
                    <HeaderDropdownItem class="border-x" to="/projects#naholosy">
                        naholosy
                    </HeaderDropdownItem>
                    <HeaderDropdownItem class="border-x border-b" to="/projects#linTime">
                        linTime
                    </HeaderDropdownItem>
                </div>
            </HeaderDropdown>
        </div>

        <div class="hidden lg:flex flex-row">
            <HeaderLink to="/"><Icon name="mdi:home-variant" /> Home</HeaderLink>
            <HeaderDropdown :icon="'mdi:bookmark-multiple'" :label="'Projects'">
                <HeaderDropdownItem href="/projects#naholosy">
                    naholosy
                </HeaderDropdownItem>
                <HeaderDropdownItem href="/projects#linTime" class="border-b">
                    linTime
                </HeaderDropdownItem>
            </HeaderDropdown>
        </div>
    </header>
</template>

<style scoped>
header {
    border-color: rgba(149, 147, 255, .25);

    backdrop-filter: blur(10px) brightness(90%);
}
</style>