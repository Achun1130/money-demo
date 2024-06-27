<template>
  <div class="common-layout bg-primary-99">
    <header class="common-layout__header bg-white">
      <layout-header>
        <WebHeader />
      </layout-header>
    </header>

    <div class="common-layout__content overflow-auto">
      <main>
        <slot></slot>
      </main>

      <!-- TODO: WebFooter 待補 -->
      <!-- <WebFooter /> -->
    </div>
  </div>
</template>
