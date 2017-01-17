@assets
Feature: Replace a file with a new file
  As a cms author
  I want to upload a new file that will replace an existing file

  Background:
    Given a "image" "folder1/file1.jpg"
    And a "file" "folder1/document.pdf"
    And a "image" "folder1/file2.jpg"
    And I am logged in with "ADMIN" permissions
    And I go to "/admin/assets"
    And I select the file named "folder1" in the gallery
    And I click on the file named "file1" in the gallery
    And I wait for 2 second
    Then I should see an "#Form_fileEditForm" element

  @javascript
  Scenario: I upload a new file into the file I have open
    When I attach the file "testfile.jpg" to dropzone "PreviewImage"
      And I wait for 1 second
    Then I should see a ".preview__toolbar-button--remove" element
      And I should see a ".preview__message--success" element
      And the "Name" field should contain "file1.jpg"
    When I press the "Save" button
      And I wait for 2 seconds
    Then I should not see a ".preview__message--success" element
      And I should not see a ".preview__toolbar-button--remove" element

  @javascript
  Scenario: Replacing a file with the same file detects and avoids duplication
    When I attach the file "file1.jpg" to dropzone "PreviewImage"
      And I wait for 1 second
    Then I should see a ".preview__toolbar-button--remove" element
      And I should see a ".preview__message--success" element
      And the "Name" field should contain "file1.jpg"
    When I press the "Save" button
      And I wait for 2 second
    Then the "Name" field should contain "file1.jpg"
      And I should not see a ".preview__message--success" element
      And I should not see a ".preview__toolbar-button--remove" element

  @javascript @modal
  Scenario: I upload a pdf file to replace an image file
    When I attach the file "document.pdf" to dropzone "PreviewImage"
      And I confirm the dialog
      And I wait for 1 second
    Then I should see a ".preview__message--success" element
      And the "Name" field should contain "document-v2.pdf"
    When I press the "Save" button
      And I wait for 2 second
    Then the "Name" field should contain "document-v2.pdf"
      And I should not see a ".preview__message--success" element
