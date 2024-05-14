/// <reference types="Cypress" />
import '../support/index';

export abstract class BaseEyes {
  seesTextWithId(id: string, text: string) {
    cy.get(`#${id}`).should('have.text', text);
    return this;
  }

  doesNotseesTextWithId(id: string, text: string) {
    cy.get(`#${id}`).should('not.have.text', text);
    return this;
  }

  seesIdVisible(id: string) {
    cy.get(`#${id}`).should('be.visible');
    return this;
  }

  doesNotseesIdVisible(id: string) {
    cy.get(`#${id}`).should('not.be.visible');
    return this;
  }

  seesTextWithClass(domClass: string, text: string) {
    cy.get(`.${domClass}`).should('have.text', text);
    return this;
  }

  seesDomVisibleWithCustomMatcher(domlabel: string, matcher: string) {
    cy.get(`[${domlabel}=${matcher}]`).should('be.visible');
    return this;
  }

  seesDomVisible(domlabel: string){
    cy.get(domlabel).should('be.visible');
    return this;
  }

  seesTextInChildDom(parentDom: string, childDom: string, text: string) {
    cy.get(`${parentDom} ${childDom}`).should('contain', text);
    return this;
  }

  seesTextWithClassAndIndex(domClass: string, index: number, text: string) {
    cy.get(`.${domClass}`)
      .eq(index)
      .should('have.text', text);
    return this;
  }

  hasLengthForDomWithClass(domClass: string, length: number) {
    cy.get(`.${domClass}`).should('have.length', length);
    return this;
  }

  hasLengthForDom(parentDomClass: string, childDom:string, length: number) {
    cy.get(parentDomClass).find(childDom).should('have.length', length);
    return this;
  }

  seesDomContainText(dom: string, text: string) {
    cy.get(dom).should('contain', text);
    return this;
  }

  doesNotseesDom(dom: string) {
    cy.get(dom).should('not.be.visible');
    return this;
  }

  seesTextInAgGridCell(rowId: string, colId: string, text: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .should('have.text', text);
    return this;
  }

  seesAgGridColumnSelected(rowId: string, colId: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .should('have.class', 'ag-cell-range-selected');
    return this;
  }

  seesAgGridRowSelected(rowIndexId: string) {
    cy.get(`[aria-rowindex=${rowIndexId}]`).should(
      'have.class',
      'ag-row-selected',
    );
    return this;
  }

  seesMinimumNumberOfElementsInDom(
    dom: string,
    childDomClass: string,
    minimumLength: number,
  ) {
    cy.get(dom)
      .find(`.${childDomClass}`)
      .should('have.length.greaterThan', minimumLength);
    return this;
  }

  seesNumberOfElementsInDom(
    dom: string,
    childDomClass: string,
    length: number,
  ) {
    cy.get(dom)
      .find(`.${childDomClass}`)
      .should('have.length', length);
    return this;
  }

  seesPathNameInUrl(path: string) {
    cy.location('pathname').should('eq', path);
    return this;
  }

  seesFullPathNameWithQueryParams(path: string) {
    const HOST = Cypress.env('APP_URL');
    cy.location('href').should('eq', `${HOST}/${path}`);
    return this;
  }

  seesDomDisabled(dom: string) {
    cy.get(dom).should('be.disabled');
    return this;
  }

  seesDomEnabled(dom: string) {
    cy.get(dom).should('not.be.disabled');
    return this;
  }
}

export class BaseHands {
  clickOnId(id: string) {
    cy.get(`#${id}`).click();
    return this;
  }

  doubleClickOnId(id: string) {
    cy.get(`#${id}`).dblclick();
    return this;
  }

  doubleClickAndDragOnAgGrid(rowId: string, colId: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
      .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
      .trigger('mouseup', { which: 1, pageX: 600, pageY: 6000 });
    return this;
  }

  clickOnDomElement(dom: string) {
    cy.get(dom).click();
    return this;
  }

  typeTextonDom(locatorName: string, locatorValue: string, text: string) {
    cy.get(`[${locatorName}="${locatorValue}"]`).type(text, { force: true });
    return this;
  }

  typeTextonId(id: string, text: string) {
    cy.get(`#${id}`).type(text, { force: true });
    return this;
  }

  clickOnChildDom(parentId: string, dom: string, index: number) {
    cy.get(`#${parentId} ${dom}`)
      .eq(index)
      .click();
    return this;
  }

  ClickOnTextWithClassAndIndex(domClass: string, index: number) {
    cy.get(`[class=${domClass}]`)
      .eq(index)
      .click();
    return this;
  }

  scrollToWithClassName(domClass: string, direction: PositionType) {
    cy.get(`.${domClass}`).scrollTo(direction);
    return this;
  }

  clickOnAgGridRow(rowId: string) {
    cy.get(`[row-id=${rowId}]`)
      .find('.ag-selection-checkbox')
      .click();
    return this;
  }

  wait(milliSecs: number) {
    cy.wait(milliSecs);
    return this;
  }
}

export class BaseDependencies {
  visitUrl(url: string) {
    const HOST = Cypress.env('APP_URL');
    cy.visit(`${HOST}${url}`);
    return this;
  }

  accessUrl(url: string) {
    cy.visit(`${url}`);
    return this;
  }

  login() {
    cy.get('#email').type(Cypress.env('USER_NAME'));
    cy.get('#password').type(Cypress.env('PASSWORD'));
    cy.get('#login_submit').click();
    return this;
  }
}

type PositionType =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'left'
  | 'center'
  | 'right'
  | 'bottomLeft'
  | 'bottom'
  | 'bottomRight';
