<script setup lang="ts">
defineOptions({
  name: 'CheckoutComponent'
})
</script>

<template>
    <div class="bg-white rounded-2xl w-full px-6">
      <div class="flex flex-row justify-between py-4">
        <span class="text-base text-bold">
          Checkout
        </span>
        <q-btn
          icon="clear"
          size="md"
          dense
          flat
          rounded
          v-close-popup
        />
      </div>
      <q-separator />
      <div class="flex flex-row justify-between py-4">
        <span class="text-xs text-bold">
          Delivery
        </span>
        <q-btn
          icon-right="chevron_right"
          icon="img:src/assets/card.svg"
          size="sm"
          text-color="primary"
          no-caps
          dense
          flat
          to="/card"
        />
      </div>
      <q-separator />
      <div class="flex flex-row justify-between py-4">
        <span class="text-xs text-bold">
          Payment
        </span>
        <q-btn
          icon-right="chevron_right"
          size="sm"
          label="Select Method"
          text-color="primary"
          dense
          no-caps
          flat
        />
      </div>
      <q-separator />
      <div class="flex flex-row justify-between py-4">
        <span class="text-xs text-bold">
          Promo Code
        </span>
        <q-btn
          icon-right="chevron_right"
          size="sm"
          label="Pick discount"
          text-color="primary"
          dense
          flat
          no-caps
        />
      </div>
      <q-separator />
      <div class="flex flex-row justify-between py-4">
        <span class="text-xs text-bold">
          Total Cost
        </span>
        <q-btn
          icon-right="chevron_right"
          size="sm"
          label="$135.96"
          text-color="primary"
          dense
          no-caps
          flat
        />
      </div>
      <q-separator />

      <div class="flex justify-center py-4">
        <span class="text-xs text-gray-500">
           By placing an order you agree to our Terms And Conditions.
        </span>
      </div>
      <q-separator />
      <div class="w-full flex justify-center pb-6">
        <q-btn
          icon="local_shipping"
          class="w-11/12"
          padding="10px 0"
          color="primary"
          rounded
        >
          Place Order
        </q-btn>
      </div>
    </div>
</template>
