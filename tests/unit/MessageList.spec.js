import { expect } from 'chai'
import { ErrorWrapper, mount } from '@vue/test-utils'
import MessageList from '@/MessageList.vue'

describe('MessageList.vue', () => {

  it('has a form', () => {
    const wrapper = mount(MessageList)
    const form = wrapper.find('form')
    expect(form.exists()).to.be.true
  })

  it('form has a text-input', () => {
    const wrapper = mount(MessageList)
    const input = getInput(wrapper)
    expect(input).not.to.be.null
  })

  it('form has a submit button', () => {
    const wrapper = mount(MessageList)
    const submit = getSubmit(wrapper)
    expect(submit).not.to.be.null
  })

  it('begins with no messages', () => {
    const wrapper = mount(MessageList)
    const messages = wrapper.findAll('.message')
    expect(messages.length).to.equal(0)
  })

  it('can add a message by clicking submit', async () => {
    const wrapper = mount(MessageList, { attachToDocument: true })
    const input = getInput(wrapper)
    const submit = getSubmit(wrapper)
    input.setValue('Message 1')
    submit.trigger('click')
    const messages = wrapper.findAll('.message')
    expect(messages.length).to.equal(1)
    expect(extractMessage(messages.at(0))).to.contain('Message 1')
  })

  it('clears the input field after clicking submit', async () => {
    const wrapper = mount(MessageList, { attachToDocument: true })
    const input = getInput(wrapper)
    const submit = getSubmit(wrapper)
    input.setValue('Message 1')
    submit.trigger('click')
    expect(input.element.value).to.equal('')
  })

  it('will not add a message if the message is empty', () => {
    const wrapper = mount(MessageList)
    addMessage(wrapper, '')
    const messages = wrapper.findAll('.message')
    expect(messages.length).to.equal(0)
  })

  it('will not add a message if the message is only spaces', () => {
    const wrapper = mount(MessageList)
    addMessage(wrapper, '   ')
    const messages = wrapper.findAll('.message')
    expect(messages.length).to.equal(0)
  })

  it('has a button to delete for each message', () => {
    const wrapper = mount(MessageList)
    addMessage(wrapper, 'Message 1')
    const message = wrapper.find('.message')
    expect(message.find('button').exists()).to.be.true
  })

  it('adding a subsequent message adds to the end of the list', () => {
    const wrapper = mount(MessageList)
    addMessage(wrapper, 'Message 1')
    addMessage(wrapper, 'Message 2')
    addMessage(wrapper, 'Message 3')
    const messages = wrapper.findAll('.message')
    expect(messages.length).to.equal(3)
    expect(extractMessage(messages.at(0))).to.contain('Message 1')
    expect(extractMessage(messages.at(1))).to.contain('Message 2')
    expect(extractMessage(messages.at(2))).to.contain('Message 3')
  })

  it('clicking message delete button removes the correct message', () => {
    const wrapper = mount(MessageList)
    addMessage(wrapper, 'Message to delete 1')
    addMessage(wrapper, 'Message to delete 2')
    addMessage(wrapper, 'Message to delete 3')
    wrapper.findAll('.message').at(1).find('button').trigger('click')
    const messages = wrapper.findAll('.message')
    expect(messages.length).to.equal(2)
    expect(extractMessage(messages.at(0))).to.contain('Message to delete 1')
    expect(extractMessage(messages.at(1))).to.contain('Message to delete 3')
  })

})

function addMessage (wrapper, message) {
  getInput(wrapper).setValue(message)
  wrapper.find('form').trigger('submit')
}

function extractMessage (message) {
  const buttonText = message.find('button').text()
  return message.text().replace(buttonText, '')
}

function getInput (wrapper) {
  const inputs = wrapper.findAll('form input')
  const length = inputs.length
  for (let i = 0; i < length; i++) {
    const input = inputs.at(i)
    const type = input.attributes('type')
    if (!type || type === 'text') return input
  }
}

function getSubmit (wrapper) {
  let button = wrapper.find('form input[type="submit"]')
  if (!button.exists()) button = wrapper.find('form button[type="submit"]')
  return button.exists() ? button : null
}