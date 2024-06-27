<template>
  <div class="common-layout bg-primary-99">
    <header class="common-layout__header bg-white">
      <layout-header>
        <ManageHeader />
      </layout-header>
    </header>

    <div class="common-layout__content overflow-auto">
      <layout-header class="common-layout__content mb-12 mt-[3.75rem]">
        <div class="flex flex-1 overflow-hidden rounded-2xl">
          <div class="w-[300px] shrink-0 bg-primary-container">
            <manage-menu />
          </div>

          <main class="flex-1 bg-white">
            <manage-main>
              <slot></slot>
            </manage-main>
          </main>
        </div>
      </layout-header>
    </div>
  </div>
</template>
