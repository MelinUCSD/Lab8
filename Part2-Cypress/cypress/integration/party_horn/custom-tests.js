describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  // First custom test
  it('Slider changes when volume input changes', () => {
      cy.get('#volume-number').clear().type('75');
      cy.get('#volume-slider').then(($el) => {
        expect($el).to.have.value(75);
      });
  });

  // Second custom test
  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  // Third custom test
  it('Audio volume property changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  // Fourth custom test
  it('Image and sound sources change when you select the party horn radio button', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  // Fifth custom test
  it('Volume image changes when increasing volumes - [0]', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  // Sixth custom test
  it('Volume image changes when increasing volumes - [1;33]', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  // Seventh custom test
  it('Volume image changes when increasing volumes - [34;66]', () => {
    cy.get('#volume-slider').invoke('val', 66).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  // Eighth custom test
  it('Volume image changes when increasing volumes - [67;100]', () => {
    cy.get('#volume-slider').invoke('val', 100).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  // Ninth custom test
  it('Honk button is disabled when the textbox input is a empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled', 'disabled');
    });
  });

  // Tenth custom test
  it('Honk button is disabled when the textbox input is a non-number', () => {
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled', 'disabled');
    });
  });

  // Eleventh custom test
  it('Honk button is enabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number').clear().type('1');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.not.have.attr('disabled', 'disabled');
    });
  });

  // Twelfth custom test
  it('Error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('101')
    cy.get('#volume-number:invalid').should('have.length', 1);
    cy.get('#volume-number').clear().type('-1')
    cy.get('#volume-number:invalid').should('have.length', 1);
  });
});
