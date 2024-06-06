import {
  onMounted,
  defineComponent,
  onUpdated,
  onUnmounted,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  ref,
} from 'vue';

export default defineComponent({
  setup: () => {
    console.log('HomePage');

    const counter = ref(0);

    const increment = () => {
      counter.value++;
    };
    onMounted(() => {
      console.log('HomePage mounted');
    });

    onUpdated(() => {
      console.log('HomePage updated');
    });
    onUnmounted(() => {
      console.log('HomePage unmounted');
    });
    onBeforeMount(() => {
      console.log('HomePage before mount');
    });
    onBeforeUpdate(() => {
      console.log('HomePage before update');
    });
    onBeforeUnmount(() => {
      console.log('HomePage before unmount');
    });
    onErrorCaptured(() => {
      console.log('HomePage error captured');
    });
    onRenderTracked(() => {
      console.log('HomePage render tracked');
    });
    onRenderTriggered(() => {
      console.log('HomePage render triggered');
    });
    onActivated(() => {
      console.log('HomePage activated');
    });
    onDeactivated(() => {
      console.log('HomePage deactivated');
    });

    return {
      counter,
      increment,
    };
  },
});
