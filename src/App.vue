<template>
  <router-view v-slot="slotProps" >
      <transition name="fade" mode="out-in" >
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
</template>
