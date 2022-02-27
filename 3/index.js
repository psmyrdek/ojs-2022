function magicTemplate() {

}

const firstName = 'James'
const lastName = 'Bond'

const update = magicTemplate`My name is ${{ lastName }}. ${{ firstName }} ${{ lastName }}.`

update({ firstName: 'George' })
update({ lastName: 'Weasley' })
update({ firstName: 'Ron' })