<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    />
    <icon v-if="error" name="error" class="icon-error"></icon>
    <span v-if="error" class="error-message">{{error}}</span>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    components: {Icon},
    name: "SweetInput",
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false // 默认值
      },
      readonly: {
        type: Boolean,
        default: false // 默认值
      },
      error: {
        type: String
      }
    }
  };
</script>
<style lang='scss' scoped>
  @import "var";

  $height: $input-height;

  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;

    > :not(:last-child) {
      margin-right: .5em;
    }

    > input {
      height: 32px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }

      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }

    &.error {
      > input {
        border-color: $red;
      }
    }

    .icon-error {
      fill: $red;
    }

    .error-message {
      color: $red;
    }
  }
</style>
