<template>
  <div class="flex min-h-dvh flex-col bg-primary-99">
    <layout-header
      element="div"
      class="mb-12 mt-[3.75rem] flex w-full flex-1 flex-col"
    >
      <div class="flex flex-1 overflow-hidden rounded-2xl">
        <aside class="w-[300px] shrink-0">
          <manage-menu />
        </aside>

        <main class="flex-1 bg-white">
          <manage-main>
            <slot />
          </manage-main>
        </main>
      </div>
    </layout-header>
  </div>
</template>
