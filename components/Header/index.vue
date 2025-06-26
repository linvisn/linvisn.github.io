<template>
    <header class="flex justify-between items-center flex-wrap sticky top-0 px-5 lg:px-12 py-2 border-b-2 z-50">
        <div class="flex justify-between w-screen lg:w-auto">
            <HeaderTitle>
                linvisn
            </HeaderTitle>
            
            <HeaderDropdown class="inline lg:hidden" :isMenu="true">
                <HeaderDropdownItem to="/">
                    <i class="bi bi-house-fill"></i> Home
                </HeaderDropdownItem>
                <HeaderDropdownItem to="/skills" class="border-b">
                    <i class="bi bi-activity"></i> Skills
                </HeaderDropdownItem>

                <HeaderDropdownLabel>
                    <i class="bi bi-bookmark-fill"></i> Projects
                </HeaderDropdownLabel>
                <div class="flex flex-col justify-start mx-4 mb-1 pl-2 py-1 border-l border-white/25">
                    <HeaderDropdownItem to="/projects#linTime" class="border rounded-e-md hover:rounded-e-xl">
                        linTime
                    </HeaderDropdownItem>
                </div>
            </HeaderDropdown>
        </div>

        <div class="hidden lg:flex flex-row">
            <HeaderLink to="/"><i class="bi bi-house-fill"></i> Home</HeaderLink>
            <HeaderLink to="/skills"><i class="bi bi-activity"></i> Skills</HeaderLink>
            <HeaderDropdown :icon="'bi-bookmark-fill'" :label="'Projects'">
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