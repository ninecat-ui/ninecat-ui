<template>
  <n-row :gutter="12">
    <n-col :span="8">
      <n-card shadow="always"> Always </n-card>
    </n-col>
    <n-col :span="8">
      <n-card shadow="hover"> Hover </n-card>
    </n-col>
    <n-col :span="8">
      <n-card shadow="never"> Never </n-card>
    </n-col>
  </n-row>
</template>