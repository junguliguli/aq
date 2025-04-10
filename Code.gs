function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('AQ 메뉴')
    .addItem('레이드 보기', 'openRaidPage')
    .addToUi();
}

function openRaidPage() {
  const html = HtmlService.createHtmlOutputFromFile('template')
      .setWidth(1000)
      .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'AQ 고정 레이드');
}

function getRaidData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AQ');
  const lastRow = sheet.getLastRow();
  const data = sheet.getRange(1, 1, lastRow, 12).getValues();

  const filteredData = data.filter(row => {
    const raidName = row[0];
    return raidName && (raidName.includes('1막') || raidName.includes('2막') || raidName.includes('3막') || raidName.includes('강습'));
  });

  return filteredData;
}
