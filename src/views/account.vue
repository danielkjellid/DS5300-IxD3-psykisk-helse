<template>
  <div class="max-w-5xl px-5 mx-auto mt-8">
    <h1 class="text-lg font-medium text-gray-900">Navn Navnesen</h1>
    <div class="lg:flex items-start py-5 mt-5 border-t border-gray-300">
      <div class="lg:w-1/3 lg:mb-0 w-full mb-4">
        <h2 class="text-base font-medium text-gray-900">Kontaktinfo</h2>
        <p class="text-sm text-gray-700">Generell kontaktinformasjon</p>
      </div>
      <div class="lg:w-2/3 w-full">
        <div class="flex items-center">
          <div class="w-1/2">
            <BaseInput id="first_name" label="Fornavn" block />
          </div>
          <div class="w-1/2 ml-3">
            <BaseInput id="last_name" label="Etternavn" block />
          </div>
        </div>
        <div class="flex items-center mt-5">
          <div class="w-1/2">
            <BaseInput id="birth_date" label="Fødseldato" block />
          </div>
          <div class="w-1/2 ml-3">
            <BaseInput id="phonenumber" label="Telefonnummer" block />
          </div>
        </div>
        <div class="flex items-center mt-5">
          <div class="w-full">
            <BaseInput id="email" label="E-post" block />
          </div>
        </div>
        <div class="flex items-center mt-5">
          <div class="w-1/2">
            <BaseInput id="street_address" label="Gateadresse" block />
          </div>
          <div class="w-1/2 ml-3">
            <div class="flex items-center">
              <div class="w-1/2">
                <BaseInput id="zip_code" label="Postkode" block />
              </div>
              <div class="w-1/2 ml-3">
                <BaseInput id="zip_place" label="By" block />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex items-start py-5 border-t border-gray-300">
      <div class="lg:w-1/3 lg:mb-0 w-full mb-4">
        <h2 class="text-base font-medium text-gray-900">Sikkerhet</h2>
        <p class="text-sm text-gray-700">Sett nytt passord</p>
      </div>
      <div class="lg:w-2/3 w-full">
        <div class="w-full">
          <BaseInput id="old_password" label="Gammelt passord" block type="password" />
        </div>
        <div class="w-full mt-5">
          <BaseInput id="new_password" label="Nytt passord" block type="password" />
        </div>
        <div class="w-full mt-5">
          <BaseInput id="repeat_new_password" label="Gjenta nytt passord" block type="password" />
        </div>
      </div>
    </div>
    <div class="lg:flex items-start py-5 border-t border-gray-300">
      <div class="lg:w-1/3 w-full">
        <h2 class="text-base font-medium text-gray-900">Abonnement</h2>
        <p class="text-sm text-gray-700">Endre abonnementet ditt</p>
      </div>
      <div class="lg:w-2/3 lg:mb-0 w-full mb-4">
        <label 
          class="block bg-white border rounded-md"
          :class="subscription == 1 ? 'border-ps-orange bg-red-100' : 'border-gray-300 bg-white'"
        >
          <div class="p-4">
            <div class="flex items-center">
              <div>
                <div class="inline-flex items-center">
                  <input 
                    type="radio" 
                    class="form-radio text-ps-orange w-5 h-5" 
                    name="pluss" 
                    value="1" 
                    v-model="subscription">
                  <div class="ml-3">
                    <span class="block text-sm font-medium text-gray-900">Pluss</span>
                    <span class="block text-sm text-gray-600">Pluss abonnement som gir deg tilgang til alle våre artikler</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
        <label 
          class="block mt-2 bg-white border rounded-md"
          :class="subscription == 2 ? 'border-ps-orange bg-red-100' : 'border-gray-300 bg-white'"
        >
          <div class="p-4">
            <div class="flex items-center">
              <div>
                <div class="inline-flex items-center">
                  <input 
                    type="radio" 
                    class="form-radio text-ps-orange w-5 h-5" 
                    name="pluss" 
                    value="2" 
                    v-model="subscription">
                  <div class="ml-3">
                    <span class="block text-sm font-medium text-gray-900">Gratis</span>
                    <span class="block text-sm text-gray-600">Normalt abonnement med restriksjoner i forhold til pluss-artikkler</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
    <div class="py-5 border-t border-gray-300">
      <div class="flex items-center justify-end">
        <BaseButton to="/" light class="mr-2">Avbryt</BaseButton>
        <BaseButton to="/">Lagre</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data() {
    return {
      subscription: 1
    }
  },
}
</script>