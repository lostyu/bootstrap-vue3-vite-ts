import { mount } from '@vue/test-utils';
import Greeting from '@/components/Greeting.vue';

describe('Greeting.vue', () => {
  test('hello', () => {
    const wrapper = mount(Greeting);

    expect(wrapper.html().includes('Vue and 11 TDD')).toBe(true);
  });
});
