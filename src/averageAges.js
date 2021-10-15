'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  const averageAgeMan = century

    ? people
      .filter(person => person.sex === 'm'
      && Math.ceil(person.died / 100) === century)
      .map(person => person.died - person.born)

    : people
      .filter(person => person.sex === 'm')
      .map(person => person.died - person.born);

  return averageAgeMan.reduce((a, b) => a + b) / averageAgeMan.length;
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average age of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * Hint: To check if a woman has children you should find the other who mention
 * her as mother.
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  const allWoman = withChildren
    ? people
      .filter(person => person.sex === 'f')
      .filter(person => people.some(some => some.mother === person.name))
      .map(person => person.died - person.born)

    : people
      .filter(person => person.sex === 'f')
      .map(person => person.died - person.born);

  return allWoman.reduce((a, b) => a + b) / allWoman.length;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a mother and her
 * child in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for mothers who have son.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  const children = onlyWithSon
    ?
    people
      .filter(person => people
        .some(some => person.mother === some.name) && person.sex === 'm')
      .map(person => person.born - people
        .find(motherBorn => person.mother === motherBorn.name).born)
    :
    people
      .filter(person => people
        .some(some => person.mother === some.name))
      .map(person => person.born - people
        .find(motherBorn => person.mother === motherBorn.name).born);

  return children.reduce((a, b) => a + b) / children.length;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
