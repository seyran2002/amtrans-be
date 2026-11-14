const fs = require('fs');

// 3. Update app/components/dashboard/CountryModal.vue
const countryModalContent = `<template>
  <Transition name="fade-modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      @click.self="handleClose"
    >
      <div
        class="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-scale-up"
      >
        <!-- Modal Header -->
        <div class="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 class="text-xl font-black text-slate-900 tracking-tight">
              {{ t('office.addCountry') }}
            </h3>
            <p class="text-xs font-semibold text-slate-400 mt-0.5">
              {{ t('office.addCountrySubtitle') }}
            </p>
          </div>

          <button
            type="button"
            class="w-9 h-9 rounded-full bg-slate-100 text-slate-400 hover:text-slate-600 hover:bg-slate-200/70 flex items-center justify-center transition-colors cursor-pointer"
            :disabled="isSubmitting"
            @click="handleClose"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
          <AlertBanner v-if="error" type="error" :message="error" />

          <!-- Armenian Name -->
          <BaseInput
            id="country-name-hy"
            v-model="form.nameHy"
            label="Armenian Name (HY)"
            placeholder="e.g. Հայաստան"
            :error="touched.nameHy ? errors.nameHy : ''"
            :touched="touched.nameHy"
            required
            @blur="touched.nameHy = true; validateForm()"
          />

          <!-- Russian Name -->
          <BaseInput
            id="country-name-ru"
            v-model="form.nameRu"
            label="Russian Name (RU)"
            placeholder="e.g. Армения"
            :error="touched.nameRu ? errors.nameRu : ''"
            :touched="touched.nameRu"
            required
            @blur="touched.nameRu = true; validateForm()"
          />

          <!-- English Name -->
          <BaseInput
            id="country-name-en"
            v-model="form.nameEn"
            label="English Name (EN)"
            placeholder="e.g. Armenia"
            :error="touched.nameEn ? errors.nameEn : ''"
            :touched="touched.nameEn"
            required
            @blur="touched.nameEn = true; validateForm()"
          />

          <!-- File Upload: Country Icon -->
          <div class="space-y-2">
            <label class="block text-xs font-bold uppercase tracking-wider text-primary/90">
              Country Icon / Flag Image <span class="text-tertiary ml-0.5 font-bold">*</span>
            </label>

            <!-- Drop / Selection Zone -->
            <label
              for="country-icon-file"
              class="flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-2xl cursor-pointer transition-all bg-slate-50/60 hover:bg-slate-100/70 border-slate-200 hover:border-primary/40"
              :class="touched.icon && errors.icon ? 'border-tertiary/60 bg-tertiary/5' : ''"
            >
              <template v-if="iconPreviewUrl">
                <div class="flex items-center gap-3 w-full">
                  <div class="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center overflow-hidden shrink-0">
                    <img :src="iconPreviewUrl" alt="Icon preview" class="w-full h-full object-cover" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 truncate">{{ selectedFileName }}</p>
                    <p class="text-[11px] text-primary font-semibold mt-0.5">Click or drag to change image</p>
                  </div>
                </div>
              </template>

              <template v-else>
                <div class="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-2">
                  <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="text-center">
                  <p class="text-sm font-bold text-slate-700">Click to upload country icon / flag</p>
                  <p class="text-[11px] text-slate-400 mt-1">PNG, JPG, SVG, WEBP — Max 5 MB</p>
                </div>
              </template>
            </label>

            <input
              id="country-icon-file"
              ref="fileInputRef"
              type="file"
              accept="image/*"
              class="sr-only"
              @change="handleFileUpload"
            />

            <p v-if="touched.icon && errors.icon" class="text-xs text-tertiary font-semibold flex items-center gap-1.5 mt-1">
              <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{{ errors.icon }}</span>
            </p>
          </div>

          <!-- Modal Actions -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <BaseButton
              type="button"
              variant="outline"
              size="md"
              :block="false"
              :disabled="isSubmitting"
              @click="handleClose"
            >
              {{ t('office.cancel') }}
            </BaseButton>

            <BaseButton
              type="submit"
              variant="primary"
              size="md"
              :block="false"
              :loading="isSubmitting"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? t('office.saving') : t('office.saveCountry') }}
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import BaseInput from '~/components/ui/BaseInput.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import AlertBanner from '~/components/ui/AlertBanner.vue'
import { useI18n } from '~/composables/useI18n'
import type { CreateCountryPayload } from '~/types/office'

const props = defineProps<{
  isOpen: boolean
  isSubmitting?: boolean
  error?: string | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'submit', payload: CreateCountryPayload): void
}>()

const { t } = useI18n()

// Form State
const form = reactive<{
  nameHy: string
  nameRu: string
  nameEn: string
}>({
  nameHy: '',
  nameRu: '',
  nameEn: ''
})

const touched = reactive<{
  nameHy: boolean
  nameRu: boolean
  nameEn: boolean
  icon: boolean
}>({
  nameHy: false,
  nameRu: false,
  nameEn: false,
  icon: false
})

const errors = reactive<{
  nameHy: string
  nameRu: string
  nameEn: string
  icon: string
}>({
  nameHy: '',
  nameRu: '',
  nameEn: '',
  icon: ''
})

// File Upload State
const fileInputRef = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const iconPreviewUrl = ref<string>('')
const selectedFileName = ref<string>('')

const handleFileUpload = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return

  if (iconPreviewUrl.value && iconPreviewUrl.value.startsWith('blob:')) {
    URL.revokeObjectURL(iconPreviewUrl.value)
  }

  selectedFile.value = file
  selectedFileName.value = file.name
  iconPreviewUrl.value = URL.createObjectURL(file)
  touched.icon = true
  validateForm()
}

const resetForm = () => {
  form.nameHy = ''
  form.nameRu = ''
  form.nameEn = ''

  selectedFile.value = null
  selectedFileName.value = ''
  if (iconPreviewUrl.value && iconPreviewUrl.value.startsWith('blob:')) {
    URL.revokeObjectURL(iconPreviewUrl.value)
  }
  iconPreviewUrl.value = ''

  touched.nameHy = false
  touched.nameRu = false
  touched.nameEn = false
  touched.icon = false

  errors.nameHy = ''
  errors.nameRu = ''
  errors.nameEn = ''
  errors.icon = ''

  if (fileInputRef.value) fileInputRef.value.value = ''
}

watch(
  () => props.isOpen,
  (newIsOpen) => {
    if (newIsOpen) resetForm()
  },
  { immediate: true }
)

const validateForm = (): boolean => {
  let isValid = true

  if (!form.nameHy.trim()) {
    errors.nameHy = t('office.errNameHyRequired')
    isValid = false
  } else {
    errors.nameHy = ''
  }

  if (!form.nameRu.trim()) {
    errors.nameRu = t('office.errNameRuRequired')
    isValid = false
  } else {
    errors.nameRu = ''
  }

  if (!form.nameEn.trim()) {
    errors.nameEn = t('office.errNameEnRequired')
    isValid = false
  } else {
    errors.nameEn = ''
  }

  if (!selectedFile.value) {
    errors.icon = t('office.errFlagRequired')
    isValid = false
  } else {
    errors.icon = ''
  }

  return isValid
}

const handleSubmit = () => {
  touched.nameHy = true
  touched.nameRu = true
  touched.nameEn = true
  touched.icon = true

  if (!validateForm()) return

  emit('submit', {
    nameHy: form.nameHy.trim(),
    nameRu: form.nameRu.trim(),
    nameEn: form.nameEn.trim(),
    icon: selectedFile.value!
  })
}

const handleClose = () => {
  if (!props.isSubmitting) {
    emit('close')
  }
}
</script>

<style scoped>
.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.25s ease;
}

.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-scale-up {
  animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
`;

fs.writeFileSync('c:/Users/user/Desktop/AmTrans/app/components/dashboard/CountryModal.vue', countryModalContent, 'utf8');

// 4. Update office.vue to remove edit country functions and update icon references
let officeVue = fs.readFileSync('c:/Users/user/Desktop/AmTrans/app/pages/dashboard/office.vue', 'utf8');

// Remove updateCountry from useCountries destructure
officeVue = officeVue.replace(/updateCountry,\s*/g, '');

// Remove handleOpenEditCountry definition
officeVue = officeVue.replace(/const handleOpenEditCountry = [\s\S]*?\}\n\n/g, '');

// Simplify handleSaveCountry
const oldHandleSaveCountry = `const handleSaveCountry = async (payload: CreateCountryPayload) => {
  if (selectedCountry.value) {
    const updated = await updateCountry(selectedCountry.value.id, payload)
    if (updated) {
      isCountryModalOpen.value = false
      selectedCountry.value = null
      showNotification(t('office.updateCountrySuccess'))
    }
  } else {
    const created = await createCountry(payload)
    if (created) {
      isCountryModalOpen.value = false
      showNotification(t('office.createCountrySuccess'))
    }
  }
}`;

const newHandleSaveCountry = `const handleSaveCountry = async (payload: CreateCountryPayload) => {
  const created = await createCountry(payload)
  if (created) {
    isCountryModalOpen.value = false
    showNotification(t('office.createCountrySuccess'))
  }
}`;

officeVue = officeVue.replace(oldHandleSaveCountry, newHandleSaveCountry);

// Replace selectedCountry usage in CountryModal prop binding
officeVue = officeVue.replace(':country="selectedCountry"', '');

// Replace country.flag references in office.vue
officeVue = officeVue.replaceAll('countryToDelete.value.flag', 'countryToDelete.value.icon');
officeVue = officeVue.replaceAll('country?.flag', 'country?.icon');
officeVue = officeVue.replaceAll('country.flag', 'country.icon');
officeVue = officeVue.replaceAll('c.flag', 'c.icon');

// Remove edit button for country from office.vue table
const editBtnRegex = /<!-- Edit Button -->\s*<button[\s\S]*?<\/button>/g;
// Only replace the edit button in the countries table (not offices table)
officeVue = officeVue.replace(editBtnRegex, '');

fs.writeFileSync('c:/Users/user/Desktop/AmTrans/app/pages/dashboard/office.vue', officeVue, 'utf8');

// 5. Update OfficeModal.vue c.flag -> c.icon if present
let officeModalVue = fs.readFileSync('c:/Users/user/Desktop/AmTrans/app/components/dashboard/OfficeModal.vue', 'utf8');
officeModalVue = officeModalVue.replaceAll('c.flag', 'c.icon');
fs.writeFileSync('c:/Users/user/Desktop/AmTrans/app/components/dashboard/OfficeModal.vue', officeModalVue, 'utf8');

console.log('Finished updating CountryModal, office.vue, and OfficeModal.vue');
