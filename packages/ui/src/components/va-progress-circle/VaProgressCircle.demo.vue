<template>
  <VbDemo>
    <VbCard title="Default">
      <div>
        No value:
        <VaProgressCircle />
      </div>
      <div>
        Value
        <VaProgressCircle :modelValue="value" />
      </div>
    </VbCard>

    <VbCard title="Slotted">
      <div>
        Static slot:
        <VaProgressCircle :modelValue="value">
          Slot
        </VaProgressCircle>
      </div>
      <div>
        Dynamic Slot:
        <VaProgressCircle :modelValue="value">
          {{ value + '%' }}
        </VaProgressCircle>
      </div>
      <div>
        Indeterminate Slot:
        <VaProgressCircle indeterminate>
          {{ value + '%' }}
        </VaProgressCircle>
      </div>
    </VbCard>

    <VbCard title="Colors">
      <VaProgressCircle
        :modelValue="value"
        color="danger"
      />
    </VbCard>

    <VbCard
      refresh
      title="Indeterminate"
    >
      <VaProgressCircle indeterminate />
    </VbCard>

    <VbCard title="Sizes">
      <div>
        30px:
        <VaProgressCircle
          :size="30"
          :modelValue="value"
        />
      </div>
      <div>
        3rem:
        <VaProgressCircle
          size="3rem"
          :modelValue="value"
        />
      </div>
    </VbCard>

   <VbCard title="Thickness">
      <div>
        Thickness 0.01:
        <VaProgressCircle
          :thickness="0.01"
          :modelValue="value"
        />
      </div>
      <div>
        Thickness 0.6:
        <VaProgressCircle
          :thickness="0.6"
          :modelValue="value"
        />
      </div>
      <div>
        Thickness 0.6 + intermediate
        <VaProgressCircle
          :thickness="0.6"
          indeterminate
        />
      </div>
    </VbCard>

    <VbCard title="context checks">
      <div>
        value:
        <VaContext :components="{VaProgressCircle: {modelValue: 50}}">
          <VaProgressCircle />
        </VaContext>
      </div>
      <div>
        indeterminate:
        <VaContext :components="{VaProgressCircle: {indeterminate: true}}">
          <VaProgressCircle />
        </VaContext>
      </div>
      <div>
        color:
        <VaContext :components="{VaProgressCircle: {color: 'danger'}}">
          <VaProgressCircle :modelValue="value" />
        </VaContext>
      </div>
      <div>
        thickness:
        <VaContext :components="{VaProgressCircle: {thickness: 0.20}}">
          <VaProgressCircle :modelValue="value" />
        </VaContext>
      </div>
      <div>
        size:
        <VaContext :components="{VaProgressCircle: {size: 30}}">
          <VaProgressCircle :modelValue="value" />
        </VaContext>
      </div>
    </VbCard>

    <VbCard title="controls">
      <button @click="value -= 100">
        -100
      </button>
      <button @click="value -= 10">
        -10
      </button>
      {{ value }}
      <button @click="value += 10">
        +10
      </button>
      <button @click="value += 100">
        +100
      </button>
    </VbCard>
  </VbDemo>
</template>

<script>
import { VaProgressCircle } from './index'

export default {
  components: {
    VaProgressCircle,
  },
  data () {
    return {
      value: 35,
    }
  },
}
</script>
