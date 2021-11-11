<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <!-- This slot is giving us a place to dynamically inject data. We just need to match our template id to this slot's id. -->
            <slot name="modal-title"> </slot>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="modal-body" />
        </div>
      </div>
    </div>
  </div>
</template>