<template>
  <div class="notifications-center" :class="{ visible: isVisible }">
    <div class="notifications-center-header">
      <span class="notifications-center-header-title">{{ title }}</span>
      <div class="notifications-center-header-toolbar"></div>
    </div>
    <div class="notifications-list-container">
      <div
        class="monaco-list list_id_65 mouse-support selection-none"
        tabindex="0"
        role="list"
        aria-label="Notifications List"
      >
        <div class="monaco-scrollable-element" role="presentation">
          <div class="monaco-list-rows">
            <div class="monaco-list-row" role="dialog">
              <div class="notification-list-item expanded">
                <div class="notification-list-item-details-row">
                  <div class="notification-list-item-source"></div>
                  <div class="notification-list-item-buttons-container"></div>
                </div>
                <div class="notification-list-item-main-row">
                  <div class="notification-list-item-message">
                    {{ message }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonacoNotification',

  data() {
    return {
      title: '',
      message: '',
      isVisible: false,
    }
  },

  methods: {
    open(title, message, timeout = 2000) {
      console.log('here')
      this.title = title || ''
      this.message = message || ''
      this.isVisible = true
      setTimeout(() => (this.isVisible = false), timeout)
    },
  },
}
</script>

<style lang="scss" scoped>
.notifications-center {
  position: fixed;
  z-index: 1000;
  right: 8px;
  bottom: -100%;
  overflow: hidden;
  width: 240px;
  color: #f8f8f2;
  box-shadow: rgb(0, 0, 0) 0px 0px 8px;
  transition: all 0.34s;
  display: block;

  &.visible {
    bottom: 32px;
  }
}
.notifications-center-header {
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 5px;
  height: 35px;
  font-size: 13px;
  line-height: 1.4em;
  background: #2b2b2b;

  &-title {
    text-transform: uppercase;
    font-size: 11px;
  }

  &-toolbar {
    flex: 1;
  }
}
.notifications-list-container {
  color: rgb(248, 248, 242);
  background: rgb(33, 34, 44);
  outline-color: rgb(25, 26, 33);
  width: 100%;
  height: 84px;
}

.monaco-list {
  max-height: 400px;

  &--rows {
    transform: translate3d(0px, 0px, 0px);
    overflow: hidden;
    height: 84px;
    left: 0px;
    top: 0px;
  }

  &-row {
    top: 0px;
    height: 84px;
    padding: 8px;
    background: #1a1a1a;
  }
}

.monaco-button {
  color: rgb(248, 248, 242);
  background-color: rgb(68, 71, 90);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(25, 26, 33);
}

.monaco-scrollable-element {
  position: relative;
  overflow: hidden;
}

.notification-list-item-message {
  word-break: break-all;
  white-space: normal;
}

.monaco-list.list_id_65 .monaco-list-rows {
  background: #1a1a1a;
}
.monaco-list.list_id_65:focus .monaco-list-row.focused {
  background-color: rgba(68, 71, 90, 0.46);
}
.monaco-list.list_id_65:focus .monaco-list-row.focused:hover {
  background-color: rgba(68, 71, 90, 0.46);
}
.monaco-list.list_id_65:focus .monaco-list-row.selected {
  background-color: #3d4051;
}
.monaco-list.list_id_65:focus .monaco-list-row.selected:hover {
  background-color: #3d4051;
}
.monaco-list.list_id_65:focus .monaco-list-row.selected {
  color: #f8f8f2;
}

.monaco-drag-image,
.monaco-list.list_id_65:focus .monaco-list-row.selected.focused {
  background-color: #44475a;
}

.monaco-drag-image,
.monaco-list.list_id_65:focus .monaco-list-row.selected.focused {
  color: #f8f8f2;
}

.monaco-list.list_id_65 .monaco-list-row.selected {
  background-color: rgba(68, 71, 90, 0.46);
}
.monaco-list.list_id_65 .monaco-list-row.selected:hover {
  background-color: rgba(68, 71, 90, 0.46);
}
.monaco-list.list_id_65:not(.drop-target)
  .monaco-list-row:hover:not(.selected):not(.focused) {
  background-color: rgba(68, 71, 90, 0.46);
}

.monaco-list.list_id_65.drop-target,
.monaco-list.list_id_65 .monaco-list-rows.drop-target,
.monaco-list.list_id_65 .monaco-list-row.drop-target {
  background-color: #44475a !important;
  color: inherit !important;
}

.monaco-list-type-filter {
  background-color: #343746;
}
.monaco-list-type-filter {
  border: 1px solid #424450;
}
.monaco-list-type-filter.no-matches {
  border: 1px solid #ff5555;
}
.monaco-list-type-filter {
  box-shadow: 1px 1px 1px #000000;
}
</style>
