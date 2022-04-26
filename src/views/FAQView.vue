<template>
  <div class="container">
    <h1>Vanlige spørsmål</h1>
    <div class="actions">
      <div class="questionContainer">
        <h3>Hvordan oppretter man en annonse?</h3>
        <p>Trykk på hamburger menyen, (logg inn dersom du ikke har gjort det). Deretter trykk på lei ut knappen
          som tar deg til et skjema for å opprette en annonse.</p>
      </div>
      <div class="questionContainer">
        <h3>Hvordan leier man en gjenstand?</h3>
        <p>Man finner en gjenstand man ønsker å leie, enten ved å søke eller trykke på en av annonsene på hjemmesiden.
          Trykk så på "send forespørsel knappen", dette tar deg til et skjema for å sende en forsespørsel.
          Her blir du bedt om å velge ønsket leieperiode, hvilken type levering du ønsker og en melding til utleier.
          Denne meldingen bør inneholde noe om når på dagen du ønsker å hente en gjenstand eller annen informasjon
          som kan være nyttig for utleier</p>
      </div>
      <div class="questionContainer">
        <h3>Hvordan sletter jeg brukeren min?</h3>
        <p>Trykk på hamburger menyen, naviger så til "min profil" deretter trykk på rediger knappen.
          Scroll til bunnen av siden her vil du finne "slett bruker" knappen</p>
      </div>
      <div class="questionContainer">
        <h3>Hvordan endrer jeg profilbilde?</h3>
        <p>Trykk på hamburger menyen, naviger så til "min profil" deretter trykk på rediger knappen.
          Trykk deretter på "legg til bilde" knappen under profilbilde/ikonet</p>
      </div>
      <div class="questionContainer">
        <h3>Hvordan bekrefter jeg en leieforespørsel?</h3>
        <p>Du skal ha fått en notifikasjon som en kan se hvis du trykker å "bjelle" ikonet.
          Her får du en oversikt over alle nylige notifikasjoner, hvis du ikke finner den der kan du trykke på hamburger menyen.
          Derfra trykker du på mine annonser, her vil du få opp alle annonser du har lagt ut. Trykk så på en annonse for å se alle forespørsler.
          Her vil du kunne trykke på en enkelt forespørsel for å se beskjeden de har sendt og knappene for å bekrefte eller avvise</p>
      </div>
      <div class="questionContainer">
        <h3>Hvordan gir du en tilbakemelding på siden</h3>
        <p>Trykk på hamburger menyen, deretter på "send tilbakemelding" knappen,
          dette vil ta deg til en side hvor du kan gi en tilbakemelding
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQView"
}
</script>

<style scoped>
.questionContainer{
  border-top:solid #707070 1px;
  border-bottom: #707070 solid 1px;
}
</style>